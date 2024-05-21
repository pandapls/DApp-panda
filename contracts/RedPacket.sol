// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

contract RedPacket {
  // 定义一个发红包的主体
  address payable public owner;
  // 红包金额
  uint256 public totalAmount;
  // 红包的数量
  uint256 public count;
  //是否等额发放
  bool isEqual;

  event DepositMode(
    address indexed depositor,
    uint256 amount,
    uint256 count,
    bool isEqual
  );

  // 该地址是否已经获取过红包
  mapping (address => bool) isGrabbed;

  constructor() payable {
    // 只有部署合约的人发红包
    owner = payable(msg.sender);
  }

  // 存钱
  function deposit(uint256 _count, bool _isEqual) public payable {
    require(msg.value > 0, "amount must > 0");
    // 只有部署合约的人发红包
    count = _count;
    isEqual = _isEqual;
    totalAmount = msg.value;
    // 前端调用成功了存钱事件提示
    emit DepositMode(msg.sender, msg.value, _count, _isEqual);
  }

  // 余额的查询
  function getBalance() public view returns (uint256) {
      return address(this).balance;
  }

  // 抢红包
  function grabRedEnvelope() public payable {
    require(count > 0, "count must > 0");
    require(totalAmount > 0, "totalAmount must > 0");
    require(!isGrabbed[msg.sender], "you have grabbed red envelope");
    isGrabbed[msg.sender] = true;

    if (count == 1) {
      payable(msg.sender).transfer(totalAmount);
    } else {
      if (isEqual) {
        uint256 amount = totalAmount / count;
        totalAmount -= amount;
        payable(msg.sender).transfer(amount);
      } else {
        uint256 random = (uint256(
          keccak256(
            abi.encodePacked(
              msg.sender,
              owner,
              count,
              totalAmount,
              block.timestamp
            )
          )
        ) % 8 ) + 1;
        

        uint256 amount = (totalAmount * random) / 10;
        payable(msg.sender).transfer(amount);
        totalAmount -= amount;
      }
    }
  }
}

