function checkPalindrome() {
    var str = document.getElementById("searchInput").value;
    var result = document.getElementById("result");
    var word = "";
    for (var i = searchInput.value.length - 1; i >= 0; i--) {
        word += searchInput.value[i];
    }
    if (word.toLowerCase() === searchInput.value.toLowerCase()) {
        result.innerHTML = `Yes ${word} is a palindrome`;
        searchInput.value = "";
    }
    else {
        result.innerHTML =  `No ${word} is not palindrome`;
        searchInput.value = "";
    }
}