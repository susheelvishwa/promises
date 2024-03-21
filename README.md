# promises


# try to understand why we need promises 
toh promises k need isliye padi ek example se samjhte he
man lete he hame ek api se data fetch karne me 20sec ka time lagta he --> seTimeout(fetchdata, 2000)
toh abhi tak hum settime ka use kr k isko handle karte thi but this is not a good ways why lets see 

--> ek example k madhyam se samjhne ki koshish karte he kiu ye sahi tarika nahi he 

man lete hame ek data ko ui me dekhne k liye 20sec ka time lagta he ye time mere internet speed or or mere ocation pr depend kr raha he ho sakta he yahi data kisi or location me kisi or network me or jada y kam time lag sakta he 

so in this case seTimeout is not good practice --> here produce Promises 

# lets try to understand how its work promises

state => resolved, reject, panding
