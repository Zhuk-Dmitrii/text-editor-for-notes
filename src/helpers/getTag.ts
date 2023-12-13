export function getTag(text: string): string[] {
   const words: string[] = text.split(' ')
   const tag: string[] = []

   for (let i = 0; i < words.length; i++) {
      if (words[i].includes('#')) {
         const index: number = words[i].indexOf('#')
         tag.push(words[i].slice(index))
      }
   }

   return tag
}