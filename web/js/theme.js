export function toggleMode() {
  const icon = document.querySelector("#theme i")
  const value = document.documentElement.classList.toggle("light")

  if (value) {
    icon.setAttribute("class", "ph ph-sun")
  } else {
    icon.setAttribute("class", "ph ph-moon-stars")
  }
}
