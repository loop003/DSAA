// 房间（用格栅表示）中有一个扫地机器人。格栅中的每一个格子有空和障碍物两种可能。
// 扫地机器人提供4个API，可以向前进，向左转或者向右转。每次转弯90度。
// 当扫地机器人试图进入障碍物格子时，它的碰撞传感器会探测出障碍物，使它停留在原地。
// 请利用提供的4个API编写让机器人清理整个房间的算法。
// interface Robot {
//   // 若下一个方格为空，则返回true，并移动至该方格
//   // 若下一个方格为障碍物，则返回false，并停留在原地
//   boolean move();

//   // 在调用turnLeft/turnRight后机器人会停留在原位置
//   // 每次转弯90度
//   void turnLeft();
//   void turnRight();

//   // 清理所在方格
//   void clean();
// }
// 不是实现机器人,room未知

function cleanRoom(robot) {
  // 与islands对比，房间大小未知

  let dir = 0
  // 存储扫过的节点
  const cleaned = new Set()
  
  dfs(0, 0, dir)

  function dfs(i, j, dir) {
    const cur = i + '' + j
    if (cleaned.has(cur)) return
    robot.clean()
    cleaned.add(cur)

    for (let k=0; k<4; k++) {
      if (robot.move()) {
        let x = i, y = j
        switch (dir) {
          case 0:
            x = i - 1
            break
          case 90:
            y = j - 1
            break
          case 180:
            x = i + 1
            break
          case 270:
            y = j + 1
            break
        }
        dfs(x, y, dir)
        // 
        robot.turnleft()
        robot.turnleft()
        robot.move()
        robot.turnright()
        robot.turnright()
      }
      robot.turnleft()
      dir += 90
      dir %= 360
    }
  }
}