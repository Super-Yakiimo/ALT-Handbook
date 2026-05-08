const start = () => {
    let level = Number(document.querySelector("#level").value);
    let choice = LIST[level];
    let rnd = Math.floor(Math.random() * choice.length);
    let story = choice[rnd];

    //console.log(story);

    let essayBox = document.querySelector('#essayBox');
    let questBox = document.querySelector('#questBox');

    let ctrlBtn = document.querySelector('#ctrlBtn');

    const makeText = () => {
        essayBox.innerHTML = "";
        let array = story.text.split(" ");
        //console.log(array);
        array.forEach(word => {
            let p = document.createElement('p');
            p.className = 'hoverText';
            p.innerHTML = ` ${word} `;
            p.addEventListener('click', () => {
                speakText(word);
            });
            essayBox.appendChild(p);
        });
    }

    story.quest.forEach((quest, index) => {
        let qText = document.createElement('h3');
        qText.innerHTML = `${index + 1}: ${quest.text}`;

        questBox.appendChild(qText);

        quest.options.forEach((opt) => {
            let rnd = Math.random();
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = `${rnd}`;
            radio.name = index;
            let label = document.createElement('label');
            label.htmlFor = `${rnd}`;
            label.innerHTML = opt;

            questBox.appendChild(document.createElement('br'));
            questBox.appendChild(radio);
            questBox.appendChild(label);
        });

    });

    ctrlBtn.addEventListener('click', () => {
        speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(story.text);

        utterance.onboundary = (event) => {
            let first = event.charIndex;
            let len = event.charLength;
            let format = `${story.text.slice(0, first)}<mark>${story.text.slice(first, first + len)}</mark>${story.text.slice(first + len, story.text.length - 1)}`;
            essayBox.innerHTML = Array.from(format.split(' '), (word) => `<p class='autoText'>${word}</p>`).join(' ');
        };

        utterance.onend = () => {
            makeText();
        }

        speechSynthesis.speak(utterance);
    });

    makeText();

    // begin
    startScrn.classList.add('hide');
}