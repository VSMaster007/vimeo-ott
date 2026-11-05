/**
 * Fixed photography for the concept demo.
 * These are stable Unsplash image URLs (sauna, wellness, architecture, nature).
 * Replace them with licensed brand assets. Do not swap in a random image generator.
 */
export const photos = {
  stones: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
  stillness: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
  forest: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  timber: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
  dawn: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=80",
  lake: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
} as const;

/**
 * Stable public Google sample MP4s used as playback placeholders.
 * Replace them with the real films before any launch. They are not Sauna Channel media.
 */
export const sampleVideos = {
  joyrides: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  escapes: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  blazes: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  fun: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  meltdowns: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  bunny: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  sintel: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  elephants: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
} as const;
