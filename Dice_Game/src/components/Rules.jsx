import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play the Dice Game</h2>
        <div className="text">
            <p> =>  Select any number</p>
            <p> => Click on the dice image</p>
            <p> => After click on the dice if selected number is equal to dice number you will get same point as dice{" "}</p>
            <p> => If you get wrong guess then 2 point will be dedcuted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    border-radius: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;

    }
`

