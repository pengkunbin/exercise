const obj = {
    "status": 200,
    "message": "Success",
    "data": [{
        "departments": {
            "id": "D1000001",
            "name": "好未来教育",
            "children": [
                {
                    "id": "D1000002",
                    "name": "集团总部",
                    "children": [
                        {
                            "id": "D1000002",
                            "name": "集团总部-111",
                            "children": [
                                {
                                    "id": "D1000002",
                                    "name": "集团总部-111-AAA",
                                    "children": [
                                        {
                                            "id": "D1000002",
                                            "name": "集团总部-111-AAA-aaa"
                                        }
                                    ]
                                }
                            ]
                        }]
                }]
        }
    }, {
        "departments": {
            "id": "D1000001",
            "name": "好未来教育",
            "children": [
                {
                    "id": "D1000002",
                    "name": "集团总部",
                    "children": [
                        {
                            "id": "D1000002",
                            "name": "集团总部-111",
                            "children": [
                                {
                                    "id": "D1000002",
                                    "name": "集团总部-111-AAA",
                                    "children": [
                                        {
                                            "id": "D1000002",
                                            "name": "集团总部-111-AAA-aaa"
                                        }
                                    ]
                                }
                            ]
                        }]
                }]
        }
    }]
}

for (let i = 0; i < obj.data.length; i++) {
    const data = JSON.parse(JSON.stringify(obj.data[i]).replace(/"id"/g, '"value"').replace(/"name"/g, '"label"'))
    obj.data[i] = data
}
console.log(obj) 