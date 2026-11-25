const albumUrl = (album) => `album.html?album=${encodeURIComponent(album.id)}`;

const copyrightYear = document.querySelector("[data-current-year]");
if (copyrightYear) copyrightYear.textContent = ` ${new Date().getFullYear()}`;

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "UTC",
});

function formatPhotoDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

document.addEventListener("alpine:init", () => {
  Alpine.data("portfolio", () => ({
    featuredAlbums: galleryAlbums.filter((album) => album.photos.length).slice(0, 3),
    albumUrl,
  }));

  Alpine.data("albumList", () => ({
    albums: galleryAlbums,
    albumUrl,
  }));

  Alpine.data("albumPage", () => {
    const albumId = new URLSearchParams(window.location.search).get("album");
    const album = galleryAlbums.find((entry) => entry.id === albumId);

    return {
      album,
      selectedIndex: null,
      formatDate: formatPhotoDate,

      init() {
        document.title = `${this.album?.title || "Album tidak ditemukan"} | Sela`;
      },

      get currentPhoto() {
        return this.selectedIndex === null ? null : this.album.photos[this.selectedIndex];
      },

      openPhoto(index) {
        this.selectedIndex = index;
        this.$nextTick(() => this.$refs.dialog.showModal());
      },

      closePhoto() {
        this.$refs.dialog.close();
      },

      clearPhoto() {
        if (!this.$refs.dialog.open) this.selectedIndex = null;
      },

      movePhoto(direction) {
        const count = this.album.photos.length;
        this.selectedIndex = (this.selectedIndex + direction + count) % count;
      },
    };
  });
});

