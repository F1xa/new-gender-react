import { AddInput } from '../input/Input';
import './output.css';

export function Result(props) {
  const { value } = props;
  return (
    <div className="container">{value}</div>
  )
}