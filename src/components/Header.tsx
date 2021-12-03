type Props = {
  name: string;
  age: number;
}


export const Header = ({name, age}: Props) => {
  return(
  <header>
    <h1>bang! {name}, vc já viveu {age} anos!</h1>
  </header>
    )
}