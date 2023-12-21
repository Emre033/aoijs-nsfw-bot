module.exports = {
    name:"boobs",
    code:`
    $color[Random]
    $image[
        $jsonRequest[https://nekobot.xyz/api/image?type=boobs;message;]
            ]
            $footer[$username kullandı!]
            $reply
            $onlyNsfw[Hata! bu komutu yalnızca **NSFW** kanallarında kullanabilirsin!]
            $addTimesTamp
            `}