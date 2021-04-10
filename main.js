const str = `
010-1234-5678.
thedulee@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brow fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
const h = ` the hello  world   !

`

console.log(
  //str.match(/.{1,}(?=@)/g)
  str.match(/(?<=@).{1,}/g)
) 
