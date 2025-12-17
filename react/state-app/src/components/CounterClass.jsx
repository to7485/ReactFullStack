class CounterClass extends Component {
    constructor(props){
        super(props);
        //1. 상태를 정의
        this.state = {
            count : 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return (
            //ui
        )
    }
}