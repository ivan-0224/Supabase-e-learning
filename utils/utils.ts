export function isImageFilename(filename: string) {
    const imageExtensions = [
      "jpg",
      "jpeg",
      "jfif",
      "pjpeg",
      "pjp",
      "png",
      "gif",
      "jp2",
      "j2k",
      "jpf",
      "jpx",
      "jpm",
      "mj2",
      "webp",
      "apng",
      "avif",
      "svg",
      "svgz",
      "bmp",
      "ico",
      "cur",
      "tif",
      "tiff",
      "heif",
      "heic",
      "jxl",
    ];
    const lower = filename.toLowerCase();
    return imageExtensions.some((ext) => lower.endsWith(`.${ext}`));
  }