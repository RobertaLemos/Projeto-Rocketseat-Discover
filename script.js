function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //subst. a imag
  if (html.classList.contains("light")) {
    // se tiver light mode, adc a imag ligth

    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem ligth mode, manter a imag normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

//se tiver sem ligth mode, manter a imag normal
