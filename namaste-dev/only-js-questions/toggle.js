function toggle(...values){
    let state  =-1;
    let length = values.length;
    return function(){
        state = (state + 1) % length;
        return values[state]
    }
}


values = ['A', 'B', 'C']
state = -1

// Call 1:
state = ( -1 + 1 ) % 3 = 0  → values[0] = 'A'

// Call 2:
state = ( 0 + 1 ) % 3 = 1  → values[1] = 'B'

// Call 3:
state = ( 1 + 1 ) % 3 = 2  → values[2] = 'C'

// Call 4:
state = ( 2 + 1 ) % 3 = 3 % 3 = 0 → values[0] = 'A'