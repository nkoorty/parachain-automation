pragma solidity ^0.8.0;

contract StringStore {
    string public storedString = "Hello Moonbeam";

    event StringSet(string _value);

    function setString(string memory _string) public {
        storedString = _string;
        emit StringSet(_string);
    }

    function getString() public view returns (string memory) {
        return storedString;
    }
}