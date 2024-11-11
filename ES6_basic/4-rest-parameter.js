export default function returnHowManyArguments(...args) {
   let totalArguments = 0;
   for (const arg  of args) {
      totalArguments++;
   }

   return totalArguments;
};


