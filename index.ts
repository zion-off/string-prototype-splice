interface String {
    splice(start?: number, deleteCount?: number, ...items: string[]): string;
  }
  
  if (!String.prototype.splice) {
    String.prototype.splice = function (
      start?: number,
      deleteCount?: number,
      ...items: string[]
    ): string {
      const length = this.length;
      start = start === undefined ? 0 : start;

      if (start < 0) {
        start = Math.max(length + start, 0);
      } else {
        start = Math.min(start, length);
      }

      if (deleteCount === undefined || deleteCount > length - start) {
        deleteCount = length - start;
      } else if (deleteCount < 0) {
        deleteCount = 0;
      }

      const before = this.slice(0, start);
      const after = this.slice(start + deleteCount);

      const result = before + items.join('') + after;

      return result;
    };
  }
  