const input = document.querySelector("input");
const output = document.querySelector("p");



input.addEventListener("input", (e) => {
  const value = e.target.value

  const hasSpaces = /\s/.test(value)
  const hasCaps = /[A-Z]/.test(value)

  let result = value

  if (hasSpaces) {
    result = result.replace(/\s+/g, "-")
  }

  if (hasCaps) {
    result = result.replace(/([A-Z])/g, "-$1").toLowerCase()
  }

  output.textContent = result
})
