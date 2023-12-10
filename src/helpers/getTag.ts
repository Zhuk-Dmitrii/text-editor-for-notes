export function getTag(text: string): string {
   const words: string[] = text.split(' ')
   let tag: string = ''

   for (let i = 0; i < words.length; i++) {
      if (words[i].includes('#')) {
         const startIndex: number = words[i].indexOf('#')
         tag = words[i].slice(startIndex)
      }
   }

   return tag
}