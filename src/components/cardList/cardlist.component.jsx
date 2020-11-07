import React from 'react';
import "./cardlist-style.css"
import { Card } from "../card/card.component"

export function CardList(props) {
     
    return (
        <div className="card-list">
            {
                props.monsters.map((e) =>
                    <Card key={e.id}>
                        {e}
                    </Card>
                )
            }
        </div>
    );
}