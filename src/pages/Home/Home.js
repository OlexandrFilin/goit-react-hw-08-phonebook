import {ContainerHome,TitleHome } from './Home.styled'


export default  function HomePage(){
    return (
        <ContainerHome>
          <TitleHome>
            Phone book welcome page{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>

          </TitleHome>
          
        </ContainerHome>
      );
}