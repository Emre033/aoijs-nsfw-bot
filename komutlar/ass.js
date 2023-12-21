module.exports = {
    name:"ass",
    code:`
    $color[Random]
    $image[
        $jsonRequest[https://nekobot.xyz/api/image?type=ass;message;]
            ]
            $footer[$username kullandı!]
            $reply
            $onlyNsfw[Hata! bu komutu yalnızca **NSFW** kanallarında kullanabilirsin!]
            $addTimesTamp
            `}