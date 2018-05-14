// Export a stateless functional component
// render description, amount, and createdAt values
// connect gets us access to the dispatch prop - export default connect()(ExpenseListItem); if we needed it

import React from "react";
import {Link} from "react-router-dom";

const ExpenseListItem = ( {description, amount, createdAt, id} ) => (
    <div>

        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;









