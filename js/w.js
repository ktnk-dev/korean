function fnSoundPlay(url) {
    var audio = new Audio(url)
    audio.play()
}

data = {
    Приветствия: [
        {k: "안녕", t: "Ан-нйё(а)н", r: "Приветствие друзей или младших", v: `javascript:fnSoundPlay('https://dicmedia.korean.go.kr/multimedia/multimedia_files/convert/20160913/10000/07000/295344/SND000304698.mp3');`},
        {k: "여보세요", t: "Йо-буо-се-юо", r: "Начало диалога только во время звонка", v: `javascript:fnSoundPlay('https://dicmedia.korean.go.kr/multimedia/multimedia_files/convert/20160913/30000/21000/295643/SND000304997.mp3');`},
    ],
    Предметы: [
        {k: "사진", t: "Фьо-тин", r: "Фото", v: "javascript:fnSoundPlay('https://dicmedia.korean.go.kr/multimedia/multimedia_files/convert/20120601/91484/SND000080187.mp3');"},
    ]

}
