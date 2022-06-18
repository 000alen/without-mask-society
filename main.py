# ---
# hero_showcase:
#   - showcase_unmasked: /assets/66.png
#     showcase_masked: /assets/68.png
#     showcase_url: https://example.com/
#   - showcase_unmasked: /assets/71.png
#     showcase_masked: /assets/76.png
#     showcase_url: https://example.com/
#   - showcase_unmasked: /assets/81.png
#     showcase_masked: /assets/336.png
#     showcase_url: https://example.com/
#   - showcase_unmasked: /assets/360.png
#     showcase_masked: /assets/364.png
#     showcase_url: https://example.com/
# ---

# - name: nft_showcase
#   label: Showcase
#   folder: showcase
#   create: true
#   fields:
#     - {
#         name: nft_showcase_list,
#         label: "Showcase",
#         widget: list,
#         fields:
#           [
#             {
#               name: nft_showcase_unmasked,
#               label: "Showcase unmasked",
#               widget: image,
#             },
#             {
#               name: nft_showcase_masked,
#               label: "Showcase masked",
#               widget: image,
#             },
#             { name: nft_showcase_url, label: "Showcase Url" },
#           ],
#       }


import shutil

n = 100
url = "https://opensea.io/"


with open("showcase/showcase.md", "w") as showcase:
  showcase.write("---\n")
  showcase.write("nft_showcase_list:\n")

  for i in range(1, 2 * n + 1, 2):
    shutil.copy(f"nfts/{i}.png", f"sample/nft_{i}.png")
    shutil.copy(f"nfts/{i + 1}.png", f"sample/nft_{i + 1}.png")
    showcase.write(f"  - nft_showcase_unmasked: /assets/nft_{i}.png\n")
    showcase.write(f"    nft_showcase_masked: /assets/nft_{i + 1}.png\n")
    showcase.write(f"    nft_showcase_url: {url}\n")

  showcase.write("---\n")

