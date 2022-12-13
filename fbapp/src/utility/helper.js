
export const phoneEmailHide = (data) => {

    let mailCheck = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/).test(data)
    let numCheck = (/^[+]?[0-9]{1,}$/).test(data)

    if(mailCheck){
        let splitmail = data.split('@')
        let mailaddress = splitmail[0]
        let maildomain = splitmail[1]
        let sub_first =  mailaddress.substr(0, 1);
        let sub_last =  mailaddress.substr(-3, 3);
        let mailhide =  sub_first+"******"+sub_last+'@'+maildomain;

        return mailhide;
    }else

    if(numCheck){
        let extlength = data.length -10
        let phoneleftext = data.substr(0 , extlength)
        let phonelocal = data.substr(-10, 10);
        let phonefirst =  phonelocal.substr(0, 2);
        let phonelast =  phonelocal.substr(-2, 2);
        
        let phonehide = phoneleftext + phonefirst+"******"+phonelast;

        return phonehide;
    }else{
        return 'invalid data'
    }

    
}



