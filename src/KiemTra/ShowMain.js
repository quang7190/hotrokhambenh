import React from 'react';
import axios from 'axios';
export default class MainComp extends React.Component {
constructor(props) {
    super(props)
    this.state = { 
        list_loai: [],
        list_product_VN:[],
        list_product_NG:[]
    }
}
    componentDidMount() {
        this.select_loai();
        this.select_product_VN();
        this.select_product_NG();
    }
    select_loai = () => {
        axios.get('http://localhost:8080/API/Select_Loai.php').then(({data}) => {
        if(data.success === 1){
            this.setState({list_loai: data.listall});
        }
    }).catch(error => {
        console.log(error);
    });
    }

    select_product_VN = () =>{
        axios.get('http://localhost:8080/API/Select_VN.php').then(({data}) => {
        if(data.success === 1){
            this.setState({list_product_VN: data.listall});
            console.log(data.listall);
        }
    }).catch(error => {
        console.log(error);
    });
    }
    select_product_NG = () =>{
        axios.get('http://localhost:8080/API/Select_NG.php').then(({data}) => {
        if(data.success === 1){
            this.setState({list_product_NG: data.listall});
            console.log(data.listall);
        }
    }).catch(error => {
        console.log(error);
    });
    }
    
    render() {
        const showData_NG  = this.state.list_product_NG.map((item) => {
            return(
                <div key={item.MaTruyen} className="col-md-3">
                             
                                <div className="card" style={{width:'100%'}}>
                                    <div className="card-body">
                                    <img className="card-img-bottom" src="images/h1.jpg" alt="Card image" />
                                    <p className="card-text">{item.TenTruyen}</p>
                                
                                    </div>
                                   
                                </div>
                            
                </div>
            );
        });
        const showData_VN  = this.state.list_product_VN.map((item) => {
            return(
                <div key={item.MaTruyen} className="col-md-3">
                             
                                <div className="card" style={{width:'100%'}}>
                                    <div className="card-body">
                                    <img className="card-img-bottom" src="images/h1.jpg" alt="Card image" />
                                    <p className="card-text">{item.TenTruyen}</p>
                                
                                    </div>
                                    
                                </div>
                            
                          
                        
                   
                </div>
            );
        });
        const showData_Loai = this.state.list_loai.map((item) => {
            if(item.MaLoai == 1)
            {
                return(
                    <div key={item.MaLoai} className="showProduct__List">
                        <h2>{item.TenLoai}</h2>
                        <div className="row">
                         {showData_VN}
                        </div>
                       
                        
                    </div>
                );
            }else{
                return(
                    <div key={item.MaLoai} className="showProduct__List">
                        <h2>{item.TenLoai}</h2>
                        <div className="row">                          
                              {showData_NG}                                               
                        </div>
                    </div>
                );
            }
            
        });
        
        return(
            
            <div className="showProduct">
                {showData_Loai}
                {/* <div className="showProduct__DM_1">
                    <h2>Truyện cười Việt Nam</h2>

                </div>
                <div className="showProduct__DM_2">
                     <h2>Truyện cười Nước Ngoài</h2>
                </div> */}
            </div>
        );
    };
}
