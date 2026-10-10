import sys
from PIL import Image
src, name = sys.argv[1], sys.argv[2]
bg = tuple(int(x) for x in sys.argv[3].split(',')) if len(sys.argv) > 3 else (255, 255, 255)
def contain(im, W, H):
    r = min(W / im.width, H / im.height)
    im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
    c = Image.new('RGB', (W, H), bg)
    c.paste(im, ((W - im.width) // 2, (H - im.height) // 2))
    return c
im = Image.open(src).convert('RGBA')
flat = Image.new('RGBA', im.size, bg + (255,)); flat.alpha_composite(im); im = flat.convert('RGB')
contain(im, 800, 500).save(f'app/assets/{name}.jpg', quality=88)
contain(im, 1920, 1200).save(f'app/assets/{name}-large.jpg', quality=85)
contain(im, 64, 40).save(f'app/assets/{name}-placeholder.jpg', quality=60)