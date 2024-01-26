
// JavaScript mein aap functions define kar sakte hain jo ke doosre functions ko return karte hain. Is concept ko "higher-order functions" kehte hain. JavaScript mein, functions ko first-class citizens mana jata hai, jo ke yeh matlab hai ke aap unhe kisi bhi aur value ki tarah treat kar sakte hain, jaise ke number ya string. Yahan ek simple example hai jo aapko samajhne mein madad karega


const myfunc = () => {
    const sayhello = () => {
        return "HI Bila Your are web develpoer???"
    }
    
    return sayhello
}
const ans = myfunc()
console.log(ans()); // direct print
// const x = ans   // store and print
// console.log(x());

