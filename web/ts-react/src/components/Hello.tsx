import * as React from "react";
interface HelloProps {
  message?: string;
}
const Hello: React.FC<HelloProps> = (props) => {
  return <h2>{props.message}</h2>;
};
Hello.defaultProps= {
    message:'Hello World'
}
export default Hello;
