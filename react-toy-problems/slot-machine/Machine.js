const arr = ["x","y","z"]

class Machine extends React.Component {

  // function randomizer(arr) {
  //   for (let i = 0; i < 3; i++) {
  //     arr[Math.floor(Math.random() * arr.length)];
  //   }
  // }

  render() {
    const {s1, s2, s3} = this.props;
    const isWinner = (s1 === s2) && (s2 === s3);
    return (
      <div>
        <p>{s1} {s2} {s3}</p>
        <p>{isWinner ? 'winner' : 'loser'}</p>
      </div>

    )
  }
}

