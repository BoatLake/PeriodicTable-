import chineseLv from '../assets/icons/chinese-Lv.svg'
import chineseTs from '../assets/icons/chinese-Ts.svg'
import chineseOg from '../assets/icons/chinese-Og.svg'

const chineseOgPng =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzAiIGhlaWdodD0iMTMwIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCI+PHBhdGggZD0iTTEyNy4yMSw5NC43Yy0uMzQsMi0uNjksNC45MS0xLDguNjNxLTEsNy42Mi0xLjUyLDEwLjY2LTIsMTIuMi0xMi4xOSwxMS42OC05LjY1LDAtMTMuNzEtMTMuNzEtMy41NS0xMC4xNS0zLTQ0LjY4VjU0LjA3aC00MWwtMi41OSw2LjA4SDg1LjQ5Vjk4LjUySDc2LjU2VjY2LjNIMjUuMzhWOTguNTJIMTYuNDVWNjAuMTVINDEuODdjLjcxLTEuODIsMS43Ny00LjgzLDIuMi02LjA4SDExLjkzTDEyLDQ0LjgzLDIuNzksMzYuM3ExNi43Ni0xNC43MywyNC4zOC0zMkw0MS4zOSw1LjgzbC0zLjU2LDYuNmg4My4yOHY5LjY1SDMyLjI1Yy00LjQsNi40NS0xNiwxOS4xMy0xOSwyMi40Mmw5NC42Ny0uMDhWNjguMjlxMCwyNi45MiwyLjU0LDQwLjYzYzEsMi43MSwyLjIsNC4wNiwzLjU1LDQuMDYsMS4zNS4zMywyLjItLjg1LDIuNTQtMy41NmExNTcuMjQsMTU3LjI0LDAsMCwwLDEuNTMtMTcuNzdBNzIuMzMsNzIuMzMsMCwwLDEsMTI3LjIxLDk0LjdaIi8+PHBhdGggZD0iTTcxLjc1LDcyLjQ4cS00LjQ3LDIuODktMTAuMzEsNi4zN2wtMy43Ny00LjM0YTEwNC41MiwxMDQuNTIsMCwwLDAsMTAtNS43OVoiLz48cGF0aCBkPSJNMjcuNDQsOTMuMzFhNjAuNTIsNjAuNTIsMCwwLDAsMTcuMTctOC4zOUgyOS4xNlY3OS40M0g0N1Y2Ny4yOGg3LjlWNzkuNDNINzIuNzh2NS40OUg1NC45MnY0LjYzTDU4LDg2LjA4bDguMjQsMy40N2MzLjQ0LDEuNTUsNi4wNywyLjcsNy45LDMuNDdsLTMuNzgsNC45MnEtOC45My00LjM0LTE1LjQ1LTcuMjNWOTYuMkg0N1Y4OS41NXEtNS41MSw0LjY0LTE1LjgsOWMtLjQ2LS43Ny0xLjI2LTEuOTMtMi40LTMuNDdBMTIuNzQsMTIuNzQsMCwwLDEsMjcuNDQsOTMuMzFaIi8+PHJlY3QgeD0iMjguNjkiIHk9IjI5LjE5IiB3aWR0aD0iODIuMjciIGhlaWdodD0iOC4xMiIvPjxwYXRoIGQ9Ik00NC42MSw3NC44bC00LjQ2LDRhOTcuNjgsOTcuNjgsMCwwLDAtOS42Mi02LjM3bDQuMTItMy43NlEzOS40Nyw3MS4zMyw0NC42MSw3NC44WiIvPjxwYXRoIGQ9Ik05Mi4zNiwxMTYuMTZjLS45MiwxLjM1LTMuNTYsNi40Ni0zLjc4LDYuNjVxLTMwLjkxLTIuOS0zNy4xLTExLjg2LTUuODMsOC42OC0zNy43OCwxMi43M2MtLjkxLTEuNTQtMi4yOS0zLjY2LTQuMTItNi4zNnEzMS4yNi0zLjE5LDM0LTkuNTVIMTEuNjRWMTAySDQ2YTI2LDI2LDAsMCwwLC42OS00SDU2YzAsLjU4LS4zNCw0LS4zNCw0SDkwLjN2NS43OEg1OC4zNVE2My4xNywxMTQuNzIsOTIuMzYsMTE2LjE2WiIvPjwvc3ZnPg=='

const PLATFORM = process.env.PLATFORM
const WEAPP = PLATFORM == 'weapp'

const chineseNameIcon: Record<number, string> = {
  116: chineseLv,
  117: chineseTs,
  118: WEAPP ? chineseOgPng : chineseOg,
}

export function chineseName(name: string, Z?: number) {
  if (!Z) return name

  if (Z in chineseNameIcon) {
    return { url: chineseNameIcon[Z] }
  }

  return name
}

export function staticUrl(url: string | { src: string }) {
  if (typeof url == 'string') return url
  return url.src
}
