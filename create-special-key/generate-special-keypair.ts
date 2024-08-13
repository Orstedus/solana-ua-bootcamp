import { Keypair } from "@solana/web3.js"

function createSpecialKey(word: String): void {
    let tries = 0;

    while (true) {
        console.log(`working... try:${tries}`);
        const keypair = Keypair.generate();
        if(keypair.publicKey.toBase58().substring(0, word.length).toLowerCase() == word.toLowerCase()) {
            console.log(`Public key starts with ${word} : ${keypair.publicKey.toBase58()}`);
            console.log(`tries:${tries}`);
            break;
        }
        tries++;
    }
}

createSpecialKey("max");
