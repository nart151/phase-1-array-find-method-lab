function superbowlWin(record) {
    const winEntry = record.find(entry => entry.result === 'W');
    if (winEntry) {
        return winEntry.year;
      } else {
        return undefined;
      }
    }
