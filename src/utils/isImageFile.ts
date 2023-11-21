

const imageExtensions = [
    "jpg", "jpeg", "png", "webp", "avif", "heif"
]

export function isImageFile(fileName: string): boolean {
    return imageExtensions.includes(fileName.split(".")[1])
}