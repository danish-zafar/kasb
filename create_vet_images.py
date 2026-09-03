import zlib, struct

def create_png(width, height, bg_rgb):
    r, g, b = bg_rgb
    line = bytes([0] + [r, g, b] * width)
    raw_data = line * height
    compressed = zlib.compress(raw_data)

    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    header = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0))
    idat = chunk(b'IDAT', compressed)
    iend = chunk(b'IEND', b'')
    return header + ihdr + idat + iend

# Emerald green / Dark blue themes matching website
images = {
    'public/images/veterinary/logo.png': (1, 20, 41),        # Deep Navy / Emerald accent
    'public/images/veterinary/vaccine.jpg': (5, 138, 57),     # Emerald Green
    'public/images/veterinary/petfood.jpg': (2, 29, 59),       # Navy Blue
    'public/images/veterinary/doctor.jpg': (15, 23, 42)       # Slate Slate
}

for filepath, color in images.items():
    with open(filepath, 'wb') as f:
        f.write(create_png(400, 400, color))

print("Created solid PNG base images")
