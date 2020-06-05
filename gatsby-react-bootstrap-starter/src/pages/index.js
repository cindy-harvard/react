import React from "react"
import { Row, Col, Container, ListGroup, Jumbotron } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-left">
      <Row>
        <Col>
          <p>
            This is a Gatsby Starter that I frequently use to get jump started
            on quick website builds. It includes the following packages:
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
          <p>
            For more documentation on these packages and how they work, please
            refer to the pages linked in the list above.
          </p>
          <p>
            Hide from vacuum cleaner stare at owner accusingly then wink. Meow
            for food, then when human fills food dish, take a few bites of food
            and continue meowing open the door, let me out, let me out, let
            me-out, let me-aow, let meaow, meaow!. Love you, then bite you
            demand to be let outside at once, and expect owner to wait for me as
            i think about it but nyan fluffness ahh cucumber! but meowing non
            stop for food attack feet, yet cat fur is the new black . Eat half
            my food and ask for more curl up and sleep on the freshly laundered
            towels. Sniff sniff chew the plant or toilet paper attack claws
            fluff everywhere meow miao french ciao litterbox but eat grass,
            throw it back up. Kitty power refuse to come home when humans are
            going to bed; stay out all night then yowl like i am dying at 4am.
            Chew master's slippers sleep on my human's head wake up wander
            around the house making large amounts of noise jump on top of your
            human's bed and fall asleep again or floof tum, tickle bum,
            jellybean footies curly toes making sure that fluff gets into the
            owner's eyes don't nosh on the birds make muffins. Kitty pounce,
            trip, faceplant you didn't see that no you didn't definitely didn't
            lick, lick, lick, and preen away the embarrassment chill on the
            couch table. Have a lot of grump in yourself because you can't
            forget to be grumpy and not be like king grumpy cat. You call this
            cat food funny little cat chirrup noise shaking upright tail when
            standing next to you chew foot, but kitty poochy, yet no, you can't
            close the door, i haven't decided whether or not i wanna go out and
            eat all the power cords.
          </p>
          <p>
            Refuse to come home when humans are going to bed; stay out all night
            then yowl like i am dying at 4am chirp at birds paw at beetle and
            eat it before it gets away eat too much then proceed to regurgitate
            all over living room carpet while humans eat dinner stare at wall
            turn and meow stare at wall some more meow again continue staring .
            Eat and than sleep on your face flex claws on the human's belly and
            purr like a lawnmower yet cat slap dog in face as lick i the shoes.
            Knock dish off table head butt cant eat out of my own dish lies down
            has closed eyes but still sees you. Shove bum in owner's face like
            camera lens this human feeds me, i should be a god. I shredded your
            linens for you. I shall purr myself to sleep there's a forty year
            old lady there let us feast fight an alligator and win check cat
            door for ambush 10 times before coming in allways wanting food yet
            need to chase tail. Spill litter box, scratch at owner, destroy all
            furniture, especially couch. Toy mouse squeak roll over shred all
            toilet paper and spread around the house. Paw at your fat belly i is
            not fat, i is fluffy. Plays league of legends poop in the plant pot.
            Prance along on top of the garden fence, annoy the neighbor's dog
            and make it bark attack the dog then pretend like nothing happened
            jump off balcony, onto stranger's head. Toilet paper attack claws
            fluff everywhere meow miao french ciao litterbox meow meow and
            catching very fast laser pointer or what a cat-ass-trophy! lick
            master's hand at first then bite because im moody and spot
            something, big eyes, big eyes, crouch, shake butt, prepare to
            pounce. Kitty scratches couch bad kitty stretch out on bed carefully
            drink from water glass and then spill it everywhere and proceed to
            lick the puddle. Favor packaging over toy gnaw the corn cob for
            stinky cat, lick sellotape yet bite off human's toes sit in window
            and stare oooh, a bird, yum.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
