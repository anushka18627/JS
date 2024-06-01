let mylibNfts = [];
function libNFT (book_name,book_id,book_price,buyer_name,author_name) {
    const libnewNft ={
        "book_name" : book_name,
        "book_id" : book_id,
        "book_price" : book_price,
        "buyer_name" : buyer_name,
        "author_name": author_name
    };
    mylibNfts.push(libnewNft);
}

function list_NFTs () {
    for(let count =0 ; count<mylibNfts.length;count++){
        console.log(mylibNfts[count]);
    }
}


function getTotalCount() {
    console.log("total number of available libnfts are: "+mylibNfts.length);
}


libNFT("2 States","83065",154,"Aadi","Chetan Bhagat");
libNFT("I too had a love Story","14548",183,"Anu","Ravinder Singh");
libNFT("know ma power","113765",185,"sonu","Vikas & Honey");
libNFT("king of sloth","169825",246,"Anita","Ana Huang");
libNFT("Shudrak","12640",693,"Shy","William ryder");


list_NFTs();
getTotalCount();