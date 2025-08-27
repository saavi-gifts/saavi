"use client"

import { useState, useRef, useCallback } from 'react'
import { PhotoIcon, XMarkIcon, ArrowsPointingOutIcon, ScissorsIcon } from '@heroicons/react/24/outline'

interface ImageUploadProps {
  value?: string
  onChange: (imageUrl: string) => void
  onRemove: () => void
  aspectRatio?: number // Optional aspect ratio for cropping
}

export function ImageUpload({ value, onChange, onRemove, aspectRatio }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string>(value || '')
  const [isDragging, setIsDragging] = useState(false)
  const [showCropper, setShowCropper] = useState(false)
  const [cropData, setCropData] = useState({ x: 0, y: 0, scale: 1 })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropZoneRef = useRef<HTMLDivElement>(null)

  const handleFileSelect = async (file: File) => {
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    setIsUploading(true)
    try {
      // Create preview first
      const reader = new FileReader()
      reader.onload = (e) => {
        const previewUrl = e.target?.result as string
        setPreviewUrl(previewUrl)
      }
      reader.readAsDataURL(file)

      // Upload to server
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const result = await response.json()
      
      if (result.success) {
        // Update with server URL
        onChange(result.imageUrl)
        setPreviewUrl(result.imageUrl)
      } else {
        throw new Error(result.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Failed to upload image. Please try again.')
      setPreviewUrl('')
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }, [])

  const handleRemove = () => {
    setPreviewUrl('')
    setShowCropper(false)
    setCropData({ x: 0, y: 0, scale: 1 })
    onRemove()
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleCrop = () => {
    setShowCropper(true)
  }

  const handleCropSave = async () => {
    try {
      // Apply crop transformations to the image
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      
      img.onload = () => {
        canvas.width = img.width * cropData.scale
        canvas.height = img.height * cropData.scale
        
        if (ctx) {
          ctx.save()
          ctx.translate(cropData.x, cropData.y)
          ctx.scale(cropData.scale, cropData.scale)
          ctx.drawImage(img, 0, 0)
          ctx.restore()
          
          // Convert canvas to blob and upload
          canvas.toBlob(async (blob) => {
            if (blob) {
              const formData = new FormData()
              formData.append('file', blob, 'cropped-image.jpg')
              
              try {
                const response = await fetch('/api/upload', {
                  method: 'POST',
                  body: formData
                })
                
                if (response.ok) {
                  const result = await response.json()
                  if (result.success) {
                    setPreviewUrl(result.imageUrl)
                    onChange(result.imageUrl)
                    setShowCropper(false)
                  }
                }
              } catch (error) {
                console.error('Failed to upload cropped image:', error)
                alert('Failed to save cropped image')
              }
            }
          }, 'image/jpeg', 0.9)
        }
      }
      
      img.src = previewUrl
    } catch (error) {
      console.error('Crop error:', error)
      alert('Failed to apply crop')
    }
  }

  const handleCropCancel = () => {
    setShowCropper(false)
    setCropData({ x: 0, y: 0, scale: 1 })
  }

  return (
    <div className="space-y-4">
      {/* Drag & Drop Zone */}
      <div 
        ref={dropZoneRef}
        className={`flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
          isDragging 
            ? 'border-saavi-gold bg-saavi-gold/10' 
            : 'border-gray-300 hover:border-saavi-gold bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <PhotoIcon className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            JPEG, PNG up to 5MB
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/jpeg,image/png"
          onChange={handleFileInputChange}
          disabled={isUploading}
        />
      </div>

      {/* Preview with Cropping Controls */}
      {previewUrl && (
        <div className="relative">
          <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img
              src={previewUrl}
              alt="Upload preview"
              className="w-full h-full object-cover"
            />
            
            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                type="button"
                onClick={handleCrop}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors"
                title="Crop & Position"
              >
                <ScissorsIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                title="Remove Image"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Uploading Overlay */}
            {isUploading && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <div className="text-white text-sm font-medium">Processing image...</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cropping Interface */}
      {showCropper && previewUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
            <h3 className="text-lg font-semibold mb-4">Crop & Position Image</h3>
            
            <div className="relative mb-4">
              <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={previewUrl}
                  alt="Crop preview"
                  className="w-full h-full object-cover"
                  style={{
                    transform: `translate(${cropData.x}px, ${cropData.y}px) scale(${cropData.scale})`,
                    transformOrigin: 'center'
                  }}
                />
              </div>
            </div>

            {/* Crop Controls */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Scale: {cropData.scale.toFixed(2)}x</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={cropData.scale}
                  onChange={(e) => setCropData(prev => ({ ...prev, scale: parseFloat(e.target.value) }))}
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Horizontal Position: {cropData.x}px</label>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={cropData.x}
                    onChange={(e) => setCropData(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Vertical Position: {cropData.y}px</label>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={cropData.y}
                    onChange={(e) => setCropData(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={handleCropCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCropSave}
                className="bg-saavi-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Apply Crop
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload status */}
      {isUploading && !previewUrl && (
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Processing image...
        </div>
      )}
    </div>
  )
}