Demo
=========

Live Editor - [https://surdown.github.io](https://surdown.github.io)

### Examples


> Copy-paste to listen on [https://surdown.github.io](https://surdown.github.io)
-----

**1. om jai jagdish**
```
।स<सस>स</नस>।र--<रग>।म<पप>ध<मग>।र--<रर> |<रग><रग>म<मम>।
गस<रग><रग>|म<मम> ग <सस> |सरेग<स/नि>।/ध---।रे<रेरे>ग<स/न>।स---। 
```
------

**2. yaadein**
```
।<सग>प -<प ग >।</न ग > प - <प ग > । </न र >म - <प म > 
। ग - र ग । - <र स > र स । /ध - /ध रे ।-प ग र । स 
```

---------

What is Surdown?
=========

Surdown is a plain text format for writing musical notations. Surdown text
can be used to notate structured form of a musical composition in form of a document.

Surdown name is inspired from Markdown](https://en.wikipedia.org/wiki/Markdown)


Introduction to existing Notation system
=========
The system of notation used in **Surdown** is derived from already existing letter notations used by the innovative twentieth-century musicians, Allauddin Khan, V.D. Pauskar, Vishnu Narayan Bhatkhande, and others. It has been somewhat adjusted and modified during thirty years of use at the Ali Akbar College in the United States. Although the Roman alphabet is used instead of the Devanagari script(i.e., Sanskrit/Hindi letters), and a few western musical symbols are used for their convenience , the system is essentially the same. Western music notation, which may have the advantage of being more widely understood in the modern world, nevertheless cannot communicate certain of the essential musical relationships which are germinal to this and other modal music. In fact, it makes some of them equivocal when they are actually not so. Certain of the typical ornaments and rhythms of Indian classical music appear uncecessarily more complex when written in Western notation. In addition, Western notation can imply a whole tradition of tonal and rhythmic information, much of which is not useful for interpreting Indian music.

For example , pitch in the Indian system(s) is not absolute, like the 440 A of the West. The **sa**, or "tonic", of a sarod may be different from a sitar, or flute, and every vocalist may use his own individual **sa**. Staff notation can be used at the beginning to orient a student to the letter notation, but should not be substituted one for the other. The syllable names of the notes, which correspond to the western **do,re,mi,fa,sol,la,** and **ti(si)** are **sa,re,ga,ma,pa,dha,** and **ni**. These are the short forms of the words sadja,rishaba, gandhara, madhyama, panchama, dhaivata, and nishada. Modern Hindi pronunciation drops the final -a sound. Note that **"re"** is used as a syllable instead of **"ri"** even though the latter is also sometimes heard. the note for the tonic **sa** in the lowest register is also called *Kharaja*(Jindi, *Kharaj*).


Notation
=========

> Although **सा** can actually be placed anywhere in the Western system, for convention C is usually chosen. And if C is chosen for the tonic, then the twelve notes of the chromatic scale, each a half step apart, can be thus represented:
>
>|Type|स|को. रे|शु.रे|को. ग |शु. ग|शु. म | तीव्र म|शु. प |को. ध |शु. ध|को. नि |शु. नि|
>|-|-|-|-|-|-|-|-|-|-|-|-|-|
>|T2|S|r|R|g|G|m|M|P|d|D|n|N|
>|T1|स|_रे |रे|_ग|ग|म|^म |प|_ध|ध|_नि|नी|
>
>को. = कोमल (flat)   
>
>शु. = शुध (natural)
>
> For now , the **surdown editor** software  will be supporting the **Type T1**(*i.e., Sanskrit/Hindi letters*) as an initial implementation.
>
> In future  support for **Type T2** (*i.e. Roman letters*) will be added.






Register
=========

> The Surdown Notations are written next to actual handwritten notations for easy referece


| **Register (सप्तक)**       | Handwritten Roman | Handwritten Devanagari | **Surdown Devanagari** |
|--------------------------|-------------------|------------------------|--------------------|
|**low (mandra)**          | Ṣ Ḍ ṃ             | स़ ध़ म़                  |/स /ध /म            | 
|**Middle (madhya)**       | S R G             | स रे ग                  | स र  ग              | 
|**High (tara)**           | Ṡ Ṙ Ġ             | सं रें गं                  | *स *र *ग            | 
|**very low (ati mandra )**| S̤ D̤ M̤             | स़़ ध़़ म़़                  | //स //ध //म        | 
|**very high (ati tara )** | S̈ D̈ M̈             | सऺऺऺऺ ऺ   धऺऺ ऺ  मऺ ऺ              | **स **ध **म        |

> Surdown special symbols - * and /. These are also called **Surdown Letter Annotations**.
> 
> NOTE - All the surdown **Letter Annotations** must be written before the note(letter) i.e. in prefix notation.



Rhythmic Notation
=========


If a note(letter) is written alone, it occupies one beat. A dash(-) extends the duration of the note one beat.

In the following example, **ग** and **प** have two beats each, the others one beat each

```
स रे  । ग - म । प - । ध नी *स 
```


## Beat Division

Beat divisions are annotated by angular brackets **<>**

A beat divided into two parts (e.g., **eighth notes**)is written
```
< प म >
```
**three parts (triplet)**
```
< प म ग >
```
**four parts**
```
< प म ग र >
```
**eight parts** 
```
<प--म--ग->
```


