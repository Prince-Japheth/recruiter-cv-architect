import qrcode
from PIL import Image, ImageDraw

# target link
url = "https://japhethjerry.space"

# create qr
qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H
)
qr.add_data(url)
qr.make(fit=True)

qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")

# load logo (just use largest size if ico has multiple)
logo_path = "favicon.ico"
logo = Image.open(logo_path)

# scale logo
box_size = min(qr_img.size) // 4
logo = logo.resize((box_size, box_size))

# create circular white background
circle_bg = Image.new("RGBA", (box_size, box_size), (255, 255, 255, 0))
draw = ImageDraw.Draw(circle_bg)
draw.ellipse((0, 0, box_size, box_size), fill=(255, 255, 255, 255))

# paste logo onto circle
circle_bg.paste(logo, (0, 0), mask=logo if logo.mode == "RGBA" else None)

# paste circle onto qr, centered
pos = ((qr_img.size[0] - box_size) // 2, (qr_img.size[1] - box_size) // 2)
qr_img.paste(circle_bg, pos, mask=circle_bg)

# save
qr_img.save("qr_with_logo.png")
print("QR code generated: qr_with_logo.png")
