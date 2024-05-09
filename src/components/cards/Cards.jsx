import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Cards() {

    const [boolean, setBoolean] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setBoolean(true);
        }, 2000);
    }, []);

    return (
         <>
            <h1 id='Cards' className='cards_title'>Xususiy Texnika va Uskunalar</h1>
            <div className="d-flex justify-content-around flex-wrap">
                {
                    boolean ?
                        <>

                            {
                                [0, 1, 2, 3, 4].map((e, i) => {
                                    return (
                                        <Card className='card_bg' style={{ width: '16rem', borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", marginTop: '10px' }}>
                                            <Card.Img variant="top" src="/images/Technique.png" />
                                            <Card.Body className='card_text'>
                                                <Card.Title style={{color:"white"}}>Card Title</Card.Title>
                                                <Card.Text style={{ color: "white" }}>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolore consectetur voluptatum in dicta.  illo!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                            <p className='cards_descreption'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolore consectetur voluptatum in dicta. Perspiciatis velit facere similique accusamus magnam totam deserunt illo!</p>
                        </>
                        :
                        <>
                            {
                                [0, 1, 2, 3, 4].map((e, i) => {
                                    return (
                                        <Card style={{ width: '18rem', borderTopLeftRadius: "20px", borderTopRightRadius: "20px", marginTop: '10px' }}>
                                            <Placeholder as={Card.apply} animation="glow" >
                                                <Placeholder xs={12} style={{ height: "199.38px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} />
                                            </Placeholder>
                                            <Card.Body>
                                                <Placeholder as={Card.Title} animation="glow">
                                                    <Placeholder xs={6} />
                                                </Placeholder>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                                </Placeholder>

                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </>
                }
            </div>
            
         </>
    );
}

export default Cards;
