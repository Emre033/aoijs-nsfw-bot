module.exports = {
    name:"4k",
    code:`
    $color[Random]
    $image[
        $jsonRequest[https://nekobot.xyz/api/image?type=4k;message;]
            ]
            $footer[$username kullandı!]
            $reply
            $onlyNsfw[Hata! bu komutu yalnızca **NSFW** kanallarında kullanabilirsin!]
            $addTimesTamp
            `}
            // cok zordu beyler^^