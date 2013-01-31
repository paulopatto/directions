# Usando Georeferenciamento com MongoDB

## Requerimentos
- MongoDB
- Conhecimentos b'asico de JavaScript e JSON

## Introdu'cao

<code>
    #TODO: Escrever
</code>

## Comando usado
Foi utilizado o comando $geoNear do MongoDB com sucesso com a seguinte sintaxe:
<code>
    db.runCommand({
        geoNear: 'places', // places 'e o nome da minha base de dados do mongodb
        near: [$lat, $long], // Center
        distanceMultiplier: (3963 * (Math.PI / 180)) // Milhas
    });
</code>

## Referencias

- [Keynote da 10gen sobre indexa'cao geo espacial](https://docs.google.com/presentation/d/1Xap-Iv0X9uyHix1DUgX36SE_oe_y3F7c_L_VoThtKlo/)
