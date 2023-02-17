# dinosaurs-battling-react-game-app

BIG TODO: make it responsive!!

This repository contains a simple single player vs computer game. Both the human player and the computer have 3 dinosaurs at their disposal:
1. an [Allosaurus](https://www.nhm.ac.uk/discover/dino-directory/allosaurus.html): Allosaurus was a considerably nastier carnivore than the (much later) Tyrannosaurus rex; countless examples of this aggressive, powerful, three-ton meat-eating machine have been unearthed across the western United States. Despite its lethal nature, Allosaurus was not intelligent, owing to a brain the size of a twisted hotdog ([resource](https://www.gagebeasleyshop.com/en-it/blogs/gb-blog/most-dangerous-dinosaur)).
2. an [Ankylosaurus](https://www.nhm.ac.uk/discover/dino-directory/ankylosaurus.html): Ankylosaurus, the armored dinosaur, was a near cousin of Stegosaurus, and both creatures similarly defended against foes. Unlike Stegosaurus, whose tail ended in a spiky thagomizer, Ankylosaurus sported a gigantic tail club weighing an estimated one hundred pounds—the dinosaur version of a historical mace. Ankylosaurus probably used this club for fighting among the same species during mating season. Still, it was powerful enough to shatter the hind limb of a Tyrannosaurus rex or knock out some of its teeth with a well-placed swipe ([resource](https://www.gagebeasleyshop.com/en-it/blogs/gb-blog/most-dangerous-dinosaur)).
3. a [Diplodocus](https://www.nhm.ac.uk/discover/dino-directory/diplodocus.html): Who doesn't love Diplodocus, the benign, long-necked, and sometimes mispronounced plant eater? In reality, this 100-foot-long sauropod had a slim, 20-foot-long tail that, according to some paleontologists' expert opinion, could lash like a whip at hypersonic speeds to ward off predators like Allosaurus ([resource](https://www.gagebeasleyshop.com/en-it/blogs/gb-blog/most-dangerous-dinosaur)).

### Rules
1. Allosaurus vs. Ankylosaurus --> Allosaurus wins
2. Ankylosaurus vs. Diplodocus --> Ankylosaurus wins
3. Diplodocus vs. Allosaurus --> Diplodocus wins


### Game and computer strategy
1. The human player has the right side of the battlefield, the computer player has the left side of the battlefield (and the human player cannot interact with the computer's pawns).
2. The game starts with the human player: he/she must choose a dinosaur by clicking on the relative pawn on the right side of the screen.
3. After the human player move, it is time for the computer player move: the computer chooses randomly among its dinosaurs, but on each game the computer sets a preference among the 3 pawns, and this preference is not known to the human player; the preferred dinosaur has 50% chance to be played, whereas the other two dinosaurs have 25% probability each.
4. There are 10 rounds to be played, at the end of which the winner is displayed, and the winner will be the player that has the highest score. In any case, a new game can be started at any time.

### Scoring
1. In one round, if two dinosaurus of the same type battle against each other, both are defeated (both players do not get any points).
2. In one round, if a dinosaur defeats the other one (according to the rules), the player that wins that round gets +1 point and the player that is defeated gets -1 point.

### What JS and React features I used in this game?
1. There are some timeouts on purpose! So it feels like "the computer is thinking which dinosaur to play"
2. What did I use for state management? The React Hook useReducer()
3. Did I do some tests? Sure, with JEST (this needs to be completed)
4. Is it responsive? Not yet, but in the future will be
