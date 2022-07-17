const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     
    var str='';
    
        var y=(String(expr).length)/10;
        //var fragm='';
        for (var i=0;i<y;i++)
        {
     var  fragm=String(expr).substring((i*10),i*10+10); 
        console.log('i = '+i+' y= '+y+' fragm = '+fragm);
        if (fragm === '**********') {str = str+ ' ';}
        if (fragm === '0000001011') {str = str+ 'a';}
        if (fragm === '0011101010') {str = str+ 'b';}
        if (fragm === '0011101110') {str = str+ 'c';}
        if (fragm === '0000111010') {str = str+ 'd';}
        if (fragm === '0000000010') {str = str+ 'e';}
        if (fragm === '0010101110') {str = str+ 'f';}
        if (fragm === '0000111110') {str = str+ 'g';}
        if (fragm === '0010101010') {str = str+ 'h';} 
        if (fragm === '0000001010') {str = str+ 'i';}  
        if (fragm === '0010111111') {str = str+ 'j';}
        if (fragm === '0000111011') {str = str+ 'k';}       
        if (fragm === '0010111010') {str = str+ 'l';}
        if (fragm === '0000001111') {str = str+ 'm';}
        if (fragm === '0000001110') {str = str+ 'n';}
        if (fragm === '0000111111') {str = str+ 'o';}
        if (fragm === '0010111110') {str = str+ 'p';}
        if (fragm === '0011111011') {str = str+ 'q';}
        if (fragm === '0000101110') {str = str+ 'r';}
        if (fragm === '0000101010') {str = str+ 's';}
        if (fragm === '0000000011') {str = str+ 't';}
        if (fragm === '0000101011') {str = str+ 'u';}
        if (fragm === '0010101011') {str = str+ 'v';}
        if (fragm === '0000101111') {str = str+ 'w';}
        if (fragm === '0011101011') {str = str+ 'x';}
        if (fragm === '0011101111') {str = str+ 'y';}
        if (fragm === '0011111010') {str = str+ 'z';}
        if (fragm === '1011111111') {str = str+ '1';}
        if (fragm === '1010111111') {str = str+ '2';}
        if (fragm === '1010101111') {str = str+ '3';}
        if (fragm === '1010101011') {str = str+ '4';}
        if (fragm === '1010101010') {str = str+ '5';}
        if (fragm === '1110101010') {str = str+ '6';}
        if (fragm === '1111101010') {str = str+ '7';}
        if (fragm === '1111111010') {str = str+ '8';}
        if (fragm === '1111111110') {str = str+ '9';}
        if (fragm === '1111111111') {str = str+ '0';}
        } 
    
        return str;
    }
    
module.exports = {
    decode
}
