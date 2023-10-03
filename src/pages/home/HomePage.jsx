import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
      <Container>
      <h1>Welcome to our page!</h1>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quia!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, eaque, sed, obcaecati soluta dolor quam perferendis harum officiis ipsa tempore voluptas excepturi? Est, omnis eius aut aperiam distinctio ex repellat!</p>
      
      <ButtonGroup>
        <Link to="form"><Button>Form</Button></Link>
        <Link to="employees"><Button>Employess</Button></Link>
        </ButtonGroup>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, culpa. Praesentium, consequatur illo. Excepturi, est ullam voluptatem dolores similique accusantium expedita neque illum quos iste odio, molestiae a adipisci quis.</span><span>Quia voluptatem rem officiis dolor rerum dolore atque, consequatur culpa eius fugit dicta sunt quae recusandae veritatis debitis! Saepe ea facere harum officia tempore porro. Molestias sit totam distinctio a!</span><span>Odit officia voluptates quo neque adipisci, ducimus soluta laboriosam, rem porro consequatur voluptatibus, eaque odio similique accusamus accusantium culpa non quia. Inventore, nam hic? Quis earum magnam totam a eligendi?</span><span>Officiis, et cupiditate. At dolores a inventore nihil et, aspernatur aperiam neque delectus hic repellendus eos commodi aliquam qui quod quasi veniam, eius ab. Amet ducimus fuga nisi perferendis vel.</span><span>Ea maiores repellendus magni quae tempore, ducimus quis repudiandae praesentium atque ipsum exercitationem illum neque necessitatibus a. Laudantium repellat vel tempora quam, dolore mollitia error, quas ad, officiis eius officia?</span><span>Beatae veritatis blanditiis mollitia et laborum iusto pariatur enim. Voluptatem nulla amet voluptas facere saepe maiores quaerat, quod repellat aut, eligendi iste placeat vero autem. Dolor odio repellat eos cum.</span></p>
     </Container>
  )
}

export default HomePage